import moxios from 'moxios';
import {testStore} from '../../Utils';
import {fetchPosts} from '../actions';

describe('fetchPosts action',()=>{
    beforeEach(function () {
        // import and pass your custom axios instance to this method
        moxios.install()
    });

    afterEach(function () {
    // import and pass your custom axios instance to this method
        moxios.uninstall()
    });
    test('Store should update correctly', ()=>{
        const expectedState = [{
                title: 'Test title 1',
                body: 'Test Body'
            },
            {
                title: 'Test title 2',
                body: 'Test Body'
            }
        ];
        const store = testStore();
        moxios.wait(()=>{
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: expectedState
            });
        });
        return store.dispatch(fetchPosts())
        .then(()=>{
            const newState = store.getState();
            expect(newState.posts).toBe(expectedState);
        });
    })
})
