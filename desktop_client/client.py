import json
import threading
import uuid
import requests
import psutil


class Processes:
    def __init__(self):
        self.all_processes = []
        self.process_view = {}
        self.roots = []

    def init_data(self):
        for proc in psutil.process_iter(['pid', 'ppid', 'name']):
            self.all_processes.append(proc.info)
        return self.all_processes


SERVER = "http://localhost:8000/api/insert_process/"

mac_address = (':'.join(['{:02x}'.format((uuid.getnode() >> ele) & 0xff)
                         for ele in range(0, 8 * 6, 8)][::-1]))


def send_data():
    threading.Timer(900.0, send_data).start()
    p = Processes()
    processes = p.init_data()
    print(processes)
    data = {'mac_address': mac_address, 'processes': json.dumps(processes)}
    res = requests.post(SERVER, data=data)
    print(res.text)
    # for process in processes:
    #     data = {'mac_address': mac_address, 'chunk_id': chunk, 'pid': process['pid'], 'name': process['name'],
    #             'ppid': process['ppid'], 'isValid': True}


send_data()
