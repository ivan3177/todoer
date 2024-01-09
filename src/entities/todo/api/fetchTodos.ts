export interface TodoDto {
  id: number;
  title: string;
  description: string;
}

export const fetchTodos = async () => {
  //TODO: Add real HTTP request
  // Mock data for now and imitate API call

  return await new Promise<TodoDto[]>(resolve =>
    setTimeout(() => {
      resolve(
        Array.from({length: 10}, (_, id) => ({
          id,
          title: `Todo ${id}`,
          description: `This is test todo ${id}`,
        })),
      );
    }, 1000),
  );
};

export const fetchTodoById = async (id: number) => {
  //TODO: Add real HTTP request
  // Mock data for now and imitate API call

  return await new Promise<TodoDto>(resolve =>
    setTimeout(() => {
      resolve({
        id,
        title: `Todo ${id}`,
        description: `This is test todo ${id}`,
      });
    }),
  );
};
