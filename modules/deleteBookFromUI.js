let deleteBookFromUI = (el) =>{
    if (el.classList.contains('remove-btn')) {
        el.parentElement.remove();
    }
}

export {deleteBookFromUI}