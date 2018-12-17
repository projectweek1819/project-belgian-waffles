// Schrijf hier je code

function onMouseDown(state, args){
    return state+1;
}

function onMouseDown2(state, args){
    return {count: state.count+1};
}

function counter3(){
    function onMouseDown(state, args){
        return {count: state.count+1};
    }
    return {controller: {onMouseDown}};
}

function counter4() {
    function onMouseDown(state, args) {
        return {count: state.count+1};
    }
    function onKeyDown({count}, args){
        return {count: 0};
    }
    return { controller: {onMouseDown, onKeyDown} };
}

function counter5(){
    function onMouseDown(state, args) {
        if (args.shift){
            if (state.count === 0){
                return {count: state.count};
            } else {
                return {count: state.count - 1};
            }
        } else if(!args.shift){
            return {count: state.count+1};
        }
    }
    function onKeyDown(){
        return;
    }
    return {controller: {onMouseDown, onKeyDown}}
}