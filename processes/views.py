import json
import logging
from django.http import JsonResponse
from django.utils.crypto import get_random_string
from . import processes
from . import models

logging.basicConfig(
    format='[%(levelname)s %(asctime)s %(module)s:%(lineno)d] %(message)s', level=logging.INFO)
logger = logging.getLogger(__name__)


def get_all_processes(request):
    p = processes.Processes()
    p.init_data()
    tree_view = p.normalize_data()
    return JsonResponse(tree_view)


def insert_data(request):
    if request.method == 'POST':
        mac_address = request.POST['mac_address']
        p = json.loads(request.POST['processes'])
        chunk_id = get_random_string()
        for process in p:
            models.Process.objects.create(mac_address=mac_address,
                                          chunk_id=chunk_id,
                                          pid=process['pid'],
                                          name=process['name'],
                                          ppid=process['ppid'],
                                          isValid=True)
        return JsonResponse({'success': True})


def get_tree_data(request):
    def normalize_data(data):
        res = {}
        z = {'name': 'root',
             'children': []}
        roots = []
        # logger.info(data)
        for process in data:
            res[process.pid] = {
                'name': process.name,
                'children': []
            }
            if int(process.ppid) != 0:
                roots.append((process.pid, process.ppid))
        for root in roots:
            if res.get(root[1]):
                res[root[1]]['children'].append(res[root[0]])
            else:
                res[root[1]] = {
                    'name': 'unknown father',
                    'children': []
                }
        for k, v in res.items():
            z['children'].append({'name': v['name'],
                                  'attributes': {
                                      'pid': k
                                  },
                                  'children': v['children']
                                  })

        return z

    if request.method == 'POST':
        mac_address = request.POST['mac_address']
        qs = models.Process.objects.filter(chunk_id=mac_address)
        data = normalize_data(qs)
        logger.info(data)

    return JsonResponse(data, safe=False)


def get_all_records(request):
    qs = list(models.Process.objects.values())
    return JsonResponse(qs[20::-1], safe=False)
