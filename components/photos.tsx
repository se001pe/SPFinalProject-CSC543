import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

export default function ImList() { 
    return (
    <ImageList sx = {{ width:1200, height:1000}} cols={5} rowHeight={200}>
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
    {   img: 'https://patch.com/img/cdn/users/1318183/2013/03/raw/4b1df21f54dd1ccf69ca538e0fb8dede.jpg?width=1200',
        title: 'School Exterior',
    },
    {   img: '/100_7492.JPG',
        title: 'Cyber Cafe',
    },
    {   img: '/100_7508.JPG',
        title: 'Media Center',
    },
    {   img: '/100_7739.JPG',
        title: 'School Logo',
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
        title: 'Hallways',
    },
    
    {   img: '/techexpo1.jpg',
        title: 'Tech Expo',
    },
    {   img: '/techexpo2.jpg',
        title: 'Tech Expo',
    },
    {   img: '/techexpo3.jpg',
        title: 'Tech Expo',
    },
    {   img: '/techexpo4.jpg',
        title: 'Tech Expo',
    },
    {   img: '/techexpo5.jpg',
        title: 'Tech Expo',
    },
]