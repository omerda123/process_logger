import psutil


class Processes:
    def __init__(self):
        self.all_processes = []
        self.process_view = {}
        self.roots = []

    def init_data(self):
        for proc in psutil.process_iter(['pid', 'ppid', 'name']):
            self.all_processes.append(proc.info)

    def normalize_data(self):
        for process in self.all_processes:
            self.process_view[ process['pid']] = {
                'name': process['name'],
                'children': []
            }
            if process['ppid'] != 0:
                self.roots.append((process['pid'], process['ppid']))
        for root in self.roots:
            print(self.process_view.get(root[1]))
            if self.process_view.get(root[1]):
                self.process_view[root[1]]['children'].append(self.process_view[root[0]])
            else:
                self.process_view[root[1]] = {
                    'name': 'unknown father',
                    'children': []
                }
        return self.process_view

    def print_processes(self):
        print(self.all_processes)

    def print_normalized_data(self):
        print(self.process_view)
        print(self.roots)

    def print_tree(self, p, indent=0):
        res = '  ' * indent + '- ' + p['name'] + '\n'
        return res + "".join(self.print_tree(self, p, indent + 1) for p in self.process_view['children'])


p = Processes()
p.init_data()
p.print_processes()
tree = p.normalize_data()

