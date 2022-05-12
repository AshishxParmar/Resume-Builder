import React, { useState, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Card } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import './App.css';
import UserDetails from './componets/userDetails';
import UserQuali from './componets/userQuali';
import UserAbout from './componets/userAbout';
import UserHobby from './componets/userHobby';

import { Button } from 'react-bootstrap';

const Arr = [
  {
    id: 1,
    name: <UserDetails />,
  },
  {
    id: 2,
    name: <UserQuali />,
  },
  {
    id: 3,
    name: <UserAbout />,
  },
  {
    id: 4,
    name: <UserHobby />,
  },
];

function App() {
  const [project, setProject] = useState(Arr);

  const handleOnDragEnd = (result) => {
    console.log(result);
    if (!result.destination) return;
    const items = Array.from(project);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setProject(items);
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <>
      <div>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="list">
            {(provided) => (
              <Card
                className="text-center"
                ref={provided.innerRef}
                {...provided.droppableProps}
                style={{
                  width: '30rem',
                  height: '45rem',
                  marginTop: '80px',
                  border: '5px solid grey',
                  margin: 'auto',
                  borderRadius: '5px',
                }}
              >
                <Card.Body ref={componentRef} style={{ margin: 'auto' }}>
                  {' '}
                  {project &&
                    project.map((item, index) => (
                      <Draggable
                        draggableId={item.id.toString()}
                        key={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            style={{ margin: 'auto' }}
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <p style={{ color: 'black' }}>{item.name}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </Card.Body>
              </Card>
            )}
          </Droppable>
        </DragDropContext>
      </div>
      <Button onClick={handlePrint}>Print</Button>
    </>
  );
}

export default App;
