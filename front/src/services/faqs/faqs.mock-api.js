export class FaqsMockApi {
    static getList() {
        return this._fakePromise([
            {
                id: '1',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '2',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '3',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '4',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '5',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '6',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '7',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
            {
                id: '8',
                question: '¿Qué es adoptame?',
                answer: 'Adoptame es una aplicación para visibilizar y facilitar el proceso de adopciones de mascotas callejeras, para que puedan tener un hogar feliz y seguro.'
            },
        ])
    }

    static _fakePromise(returnedData) {
        return new Promise(resolve => {
            setTimeout(() => resolve(returnedData), 2000)
        })
    }
}