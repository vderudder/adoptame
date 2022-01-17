export class PostMockApi {

    static _list = [
        {
            id: '1',
            photoUrl: "https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            title: 'Tobito',
            description: 'Amor fati, la vida es buena Lorem Impsum sit asem amen',
        },
        {
            id: '2',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '3',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '4',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '5',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '6',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '7',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        },
        {
            id: '8',
            photoUrl: 'https://images.unsplash.com/photo-1601758177266-bc599de87707?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
            title: 'Naruto',
            description: 'El gatitooooooooooooooooooooooo',
        }
    ]
    static _favoritesIdList = []

    static getList() {
        return this._fakePromise(this._list)
    }

    static getFavoritesList(
        userId // eslint-disable-line no-unused-vars
        ) { 
        const filteredList = this._list.filter(post => this._favoritesIdList.find(id => post.id == id) != null)
        return this._fakePromise(filteredList)
    }

    static addFavorite(userId, postId) {
        this._favoritesIdList.push(postId)
        return this._fakePromise({})
    }

    static removeFavorite(userId, postId) {
        this._favoritesIdList.splice(this._favoritesIdList.indexOf(postId), 1)
        return this._fakePromise({})
    }

    static isFavorite(userId, postId) {
        const isFavorite = this._favoritesIdList.find(id => id == postId)
        return this._fakePromise(isFavorite)
    }

    static _fakePromise(returnedData) {
        return new Promise(resolve => {
            setTimeout(() => resolve(returnedData), 2000)
        })
    }

}