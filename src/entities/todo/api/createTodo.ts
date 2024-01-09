import type {TodoDto} from './fetchTodos.ts';

export interface CreateTodoDto {
  title: string;
  description: string;
}

function* generateNextTodoId() {
  let start = 20;

  while (true) {
    yield start++;
  }
}

const idGenerator = generateNextTodoId();

export const createTodo = async ({
  title,
  description,
}: CreateTodoDto): Promise<TodoDto> => {
  //TODO: Add real HTTP request
  // Mock data for now and imitate API call
  return await new Promise<TodoDto>(resolve => {
    const generated = idGenerator.next();
    const id = generated.done ? 0 : generated.value;

    resolve({
      id,
      title,
      description,
    });
  });
};
