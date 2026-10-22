import { Task } from "../../../types/task";
import { mockTasks } from "../mocks/task";

// 戻り値の値は Promise<Task | undefinded> と明示します
export const getTaskById = (id?: string): Promise<Task | underfined> => {
  if(!id) return Promise.resolve(underfined);
  return new Promise((resolve) => {
    setTimeout(() => {
      const task = mockTasks.find((task) => task.id === Number.parseInt(id));
      resolve(task); // 見つからない場合は underfined が返す
    }, 500);
  });
};
