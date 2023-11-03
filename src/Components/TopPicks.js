import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { topPicks } from '../data/data'

function TopPicks() {
    return (
        <div>
            <h1 className="top-picks-header">Top Picks</h1>
            <div className="top-picks-content">
                <Splide options={{ perPage: 4, gap: "0.5rem", drag: 'free', arrows: false }}>
                    {
                        topPicks.map((item) => {
                            return (

                                <SplideSlide key={item.id}>
                                    <div style={{ position: 'relative', borderRadius: '2rem' }}>
                                        <div style={{ width: '100%', height: '100%', backgroundColor: 'black', opacity: .4, position: 'absolute', borderRadius: '2rem', cursor: 'pointer' }}>
                                            <p style={{ color: 'white', fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0', marginLeft: '1rem' }}>{item.title}</p>
                                            <p style={{ color: 'white', marginLeft: '1rem', marginTop: '0' }}>{item.price}</p>
                                            <button className='top-picks-btn'>Add To Cart</button>
                                        </div>
                                        <img src={item.img} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '2rem', cursor: 'pointer' }}
                                            alt={item.title} />
                                    </div>
                                </SplideSlide>

                            )
                        })
                    }
                </Splide>
            </div>
        </div>
    )
}

export default TopPicks
