import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
function Demo() {
  return <DndProvider backend={HTML5Backend}><div className="demo-wrapper">Hello World!</div></DndProvider>;
}

// 路由名称
Demo.routeName = 'Demo';

export default Demo;
