/**
 * Created by wm on 2017/4/12.
 */
const Foo = {template: '<div>foo</div>>'}
const Bar = {template: '<div>bar</div>>'}
const Baz = {template: '<div>baz</div>>'}

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            components: {
                c: Foo,
                a : Bar,
                b: Baz
            }
        },
        {
            path: '/other',
            components: {
                c: Baz,
                a: Bar,
                b: Foo
            }
        }
    ]
})

new Vue({
    router,
    el: '#app'
})