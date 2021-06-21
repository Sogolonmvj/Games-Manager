export const KEY_ENTER = 13;

export const preventSubmitOnEnter = (e) => {
    if(e.keyCode === KEY_ENTER) e.preventDefault();
};