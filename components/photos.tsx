import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImList() { 
    return (
    <ImageList sx = {{ width:1000, height:1000}} cols={4} rowHeight={200}>
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
    {   img: '/100_7492.JPG',
        title: 'Building',
    },
    {   img: '/100_7508.JPG',
        title: 'Building',
    },
    {   img: '100_7739.JPG',
        title: 'Hard Hat Ceremony',
    },
    {   img: '/DSC_0242.JPG',
        title: 'Hard Hat Ceremony',
    },
    {   img: '/DSC_0245.JPG',
        title: 'Hard Hat Ceremony',
    },
    {   img: '/DSC04510.JPG',
        title: 'Hard Hat Ceremony',
    },
    {   img: '/DSC05509.JPG',
        title: 'Hard Hat Ceremony',
    },
    {   img: '/DSC_0464.JPG',
        title: 'Hard Hat Ceremony',
    },
]