export default {
    items: [
        {
            name: 'Dashboard',
            url: '/dashboard',
            icon: 'icon-speedometer',
            badge: {
                variant: 'info',
                text: 'NEW'
            }
        },
        {
            title: true,
            name: 'Cây Cảnh',
            wrapper: {            // optional wrapper object
                element: "span",      // required valid HTML5 element tag
                attributes: {}        // optional valid JS object with JS API naming ex: { className: "my-class", style: { fontFamily: "Verdana" }, id: "my-id"}
            },
            class: ""             // optional class names space delimited list for title item ex: "text-center"
        },
        {
            name: 'Hoa',
            url: '/flowers',
            icon:'icon-puzzle',
            children: [
                {
                    name: 'Hoa Hồng',
                    url: '/components/flowers/rose',
                    icon: 'icon-puzzle'
                }
            ]
        }
    ]
};
