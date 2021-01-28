import Menuitem from "./MenuItem"

export default function Directory(props) {
    const menuConfig = [
        {
            title: 'nav1',
            id: 1,
            linkUrl: 'profile/1'
        },
        {
            title: 'nav2',
            id: 2,
            linkUrl: 'profile/2'
        },
        {
            title: 'nav3',
            id: 3,
            linkUrl: 'profile/3'
        },
        {
            title: 'nav4',
            id: 4,
            linkUrl: 'profile/4'
        },

    ]

    return (
        <div>
            {menuConfig.map(({ id, ...otherConfig }) =>
                <Menuitem key={id} {...otherConfig} />
            )}
        </div>
    )
}
