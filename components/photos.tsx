import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImList() { 
    return (
    <ImageList sx = {{ width:500, height:450 }} cols={3} rowHeight={164}>
            {itemData.map((item) => ( 
                <ImageListItem key = {item.img}>
                    <img
                        srcSet = {`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                        src = {`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        alt = {item.title}
                        loading = "lazy"
                    />
                </ImageListItem>
            ))}
    </ImageList>
    );
}

const itemData = [
    {
        img: 'https://s.hdnux.com/photos/27/63/27/6239692/4/960x0.webp',
        title: 'Principal',

    },
    {
        img: 'https://patch.com/img/cdn/users/1318183/2013/03/raw/4b1df21f54dd1ccf69ca538e0fb8dede.jpg?width=1200',
        title: 'School',

    },

    {   img: 'https://s.hdnux.com/photos/27/63/27/6239702/4/960x0.webp',
        title: 'Principal'
    },
]