import { getData, resetData, removeItemByIndex, removeFirstItem, removeLastItem } from './actions/todoActions.js';
import { store } from './store.js';

const createListItem = (data) => {
    const list = document.getElementById('list');
    const itemCount = document.getElementById('spnCount');
    list.innerHTML = '';
    itemCount.innerText = data.length;
    data.forEach((x,i) => {
        const entry = document.createElement('li');
        const button = document.createElement('input');
        button.type = "checkbox";
        button.addEventListener('click', ()=>{ 
            removeItemByIndex(i);
        })
        entry.appendChild(document.createTextNode(x));
        entry.appendChild(button);
        list.appendChild(entry);
    });
}

document.getElementById('btnAdd').addEventListener('click', ()=>{
    const input = document.getElementById('txtAdd');
    input.value && (getData(input.value), input.value = "");
    console.log(store.getState());
});

document.getElementById('btnReset').addEventListener('click', ()=>{
    resetData();
});

document.getElementById('btnRemoveLast').addEventListener('click', ()=>{
    removeLastItem();
});

document.getElementById('btnRemoveFirst').addEventListener('click', ()=>{
    removeFirstItem();
});

store.subscribe(()=>{
    createListItem(store.getState().data);
});