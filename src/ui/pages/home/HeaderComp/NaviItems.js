export const NavItems = [
    {   id:1,
        title : 'Pages',
        url :'/Pages',
        children:[
            {
                title: 'Page child1',
                url : '/Pages/child1'
            },
            {
                title: 'Page child2',
                url : '/Pages/child2'
            },
            {
                title: 'Page child3',
                url : '/Pages/child3'
            }
        ],
    },
    {
        id:2,
        title : 'About',
        url :'/About'
    },
    {
        id:3,
        title : 'Team',
        url :'/Team'
    },
    {   
        id:4,
        title : 'Contact',
        url :'/Contact'
    },
    {
        id:5,
        title : 'Blog',
        url :'/Blog',
        children:[
            {
                title: 'Blog child1',
                url : '/Blog/child1'
            },
            {
                title: 'Blog child2',
                url : '/Blog/child2'
            },
            {
                title: 'Blog child3',
                url : '/Blog/child3'
            }
        ],
    },
]