import React from 'react';

import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';

const Home = () => {
    return (
        <div>
            <NewsSlider 
                type="featured" 
                start={0} 
                amount={10}
                settings={{
                    dots: false
                }}
                >
            </NewsSlider>
            <NewsList 
                type="card"
                start={3}
                amount={3}
                loadmore={true}
            />
        </div>
    )
}

export default Home;