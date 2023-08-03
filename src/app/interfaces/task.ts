export interface ITask {
  id: string;
  title: string;
  completed: boolean;
  editing: boolean;
}

export interface IResponse {
  tasks: ITask[];
}