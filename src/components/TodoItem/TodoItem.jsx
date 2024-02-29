import { useState } from 'react'  
import './TodoItem.css'
 
export function TodoItem({completed, id, title, toggleTodo, deleteTodo, editTodo}) {
    const [newTitle, setNewTitle] = useState(title);
    const [isEditing, setIsEditing] = useState(false);

    function handleEdit() {
        setIsEditing(true);
    }

    function handleSave() {
        editTodo(id, newTitle);
        setIsEditing(false);
    }

    return (
        <li className="mb-1">
            <label className='w-full'>
                <input type="checkbox" checked={completed} onChange={(e) => toggleTodo(id, e.target.checked)}/>
                {isEditing ? (
                    <>
                        <input value={newTitle} onChange={e => setNewTitle(e.target.value)} placeholder='Edit Todo...' className="w-80 text-black cursor-auto" autoFocus/>
                        <button className="px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-green-800 me-1 text-sm border-2" onClick={handleSave}>Save</button>
                    </>
                ) : (
                    <>
                        <div className="w-80 text-black text-base">{title}</div>
                        <button className="px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none text-green-500 hover:text-white border border-green-500 hover:bg-green-600 focus:ring-green-800 me-1 text-sm border-2" onClick={handleEdit}>Edit</button>
                    </>       
                    )}
                <button className="px-3 py-1.5 rounded-lg cursor-pointer focus:outline-none text-red-500 hover:text-white border border-red-500 hover:bg-red-600 focus:ring-red-800 me-1 text-sm border-2" onClick={() => deleteTodo(id)}>Delete</button>
            </label>
        </li>
    );
}