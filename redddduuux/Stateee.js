export let store={
    _state:{
        profilePage:{
            posts:[
                {id:1, message:'bla bla 1'},
                {id:2, message:'bla bla 2'},
                {id:3, message:'bla bla 3'},
                {id:4, message:'bla bla 4'},
                {id:5, message:'bla bla 5'}
            ],
            newPost: ''
        } 
    },
    getState(){
        return this._state
    },
    _callSubscriber(){
        console.log('rerender');
    },
    addPost(){
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPost,
            like: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPost=''
        this.rerender(this._state)
    },
    updatePost(newText){
        this._state.profilePage.newPost = newText
        this._callSubscriber(this._state)
    },
    subscribe(observer){
        this._callSubscriber=observer
    }
}




window.store = store

