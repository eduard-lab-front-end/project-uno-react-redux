import style from './index.module.css'

import { useSelector } from 'react-redux';

export const DefaultTodos = () => {

    
  const mode = useSelector(state => state.themes.settings.mode);
  const theme = useSelector(state => state.themes.settings[mode]);

    return (
       
        <div className={style.defaultWrapperTodos}
        style= {{
            background:theme.todosStyles.todosBackground
        }}>
            <h2 className={style.header}>Task not found</h2>
            <p className={style.descr}>Please create any Task</p>
        </div>
       
    )
}
