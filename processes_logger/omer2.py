import json
from collections import defaultdict
from pprint import pprint

with open("omer.json") as f:
    data = json.load(f)

process_by_parent_id = defaultdict(list)
roots = []

for p in data:
    if p['pid'] == 0:
        roots.append(p)
    else:
        process_by_parent_id[p['ppid']].append(p)

# pprint(roots)
# pprint(dict(process_by_parent_id))

def get_forest(nodes):
    return [{**n, 'children': get_forest(process_by_parent_id[n['pid']])} for n in nodes]


pprint(get_forest(roots))