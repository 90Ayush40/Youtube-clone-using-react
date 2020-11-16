import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow 
            image="https://cdn.pixabay.com/photo/2018/08/10/15/45/woman-3597101_960_720.jpg"
            channel="Clever Programmer"
            verified
            subs="1M"
            noOfVideos={382}
            description="You can find awesone clones of leading websites here and only here"
            />

            <hr />

            <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
             <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
             <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
             <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
             <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
             <VideoRow
            views="2.8M"
            subs="1M"
            description="Do you want to build a fullstack projects like Amazon then you are at right place"
            timestamp="1 day ago"
            channel="Clever Programmer"
            title="Lets build Amazon Clone"
            image="https://cdn.pixabay.com/photo/2017/03/29/00/50/amazon-2183855_960_720.png"
             />
        </div>
    )
}

export default SearchPage
