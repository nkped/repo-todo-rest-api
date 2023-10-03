import { FetchFailed } from "./lib/exceptions"
import TodoList from "./components/TodoList"

//const session = false

const HomePage = () => {
   /*  if (!session) throw new FetchFailed() */

  return (
    <div>HomePage
        <TodoList />
    </div>
  )
}

export default HomePage