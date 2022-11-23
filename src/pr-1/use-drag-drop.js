export const useDragDrop = ({type,data, onAdd, onMove, onRemove}) => {
    const [, drag] = useDrag(() => ({
        type,
        item: () => ({...data}),
        end: (draggedItem, monitor) => {
            if(!monitor.getDropResult()) onRemove(draggedItem)
        }
    }))

    const [, drop] = useDrop(() => ({
        accept: type,
        drop: (draggedItem) => {
            if(!draggedItem.column) onAdd(draggedItem)
            else onChange(draggedItem)

            return draggedItem
        }
    }))

    return {
        drag,
        drop
    }
}

const touchEvent = () => {

    return(
        <Text id={"text"}
        // onClick={() => {
        //   console.log("click")
        // }}
        // onPointerDown={() => {
        // console.log("pointer down")}}
        // onPointerMove={(e) => console.log("pointer move", `${e.clientX} - ${e.clientY}`)}
    > ------ </Text>)
}
