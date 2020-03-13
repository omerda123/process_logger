import psutil


class Processes:
    def __init__(self):
        self.all_processes = []
        self.process_view = []
        self.roots = []

    def init_data(self):
        for proc in psutil.process_iter(['pid', 'ppid', 'name', 'username']):
            self.all_processes.append(proc.info)

    def normalize_data(self):
        for process in self.all_processes:
            print(process)
            if process['ppid'] == 0:
                self.roots.append(process['pid'])
            self.process_view.append(
                {
                    process['pid']: {
                        'name': process['name'],
                        'children': []
                    }
                }
            )
            if process['ppid'] in self.process_view.keys():
                self.process_view['ppid']['children'].append(process)

    def print_processes(self):
        print(self.all_processes)

    def print_normalized_data(self):
        print(self.process_view)
        print(self.roots)

    def print_tree(self, p, indent):
        print(f"{'-' * indent} {p['name']}")
        return self.print_tree()


processes = Processes()
processes.init_data()
processes.normalize_data()
processes.print_processes()
processes.print_normalized_data()
