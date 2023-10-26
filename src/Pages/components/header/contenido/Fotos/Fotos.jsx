import './Fotos.css'
import AlbumData from './Album.json'
import { chunkArray } from '../discos/participaciones/funcionArray/chunkedArray';
import { useRef, useState } from 'react';
import FlechaIzquierda from './Recursos/izquierda.png'
import FlechaDerecha from './Recursos/derecha.png'


function Fotos() {
    const [selectedImage, setSelectedImage] = useState(null);
    const containerImageRef = useRef(null);
    const imageContainerRef = useRef(null);

    const imagesPerPage = 20;
    const [currentPage, setCurrentPage] = useState(1)

    const [allImages, setAllImages] = useState(AlbumData)

    const handleImageClick = (url) => {
        setSelectedImage(url);
    };

    const startIndex = (currentPage - 1) * imagesPerPage;
    const endIndex = startIndex + imagesPerPage
    const imagesToDisplay = allImages.slice(startIndex, endIndex);
    

    const nextImage = () => {
        const currentIndex = AlbumData.findIndex((imagen) => imagen.url === selectedImage)
        if (currentIndex < AlbumData.length - 1) {
            setSelectedImage(AlbumData[currentIndex + 1].url)
        } else {
            setSelectedImage(AlbumData[0].url);
        }
    };

    const beforeImage = () => {
        const currentIndex = AlbumData.findIndex((imagen) => imagen.url === selectedImage)
        if (currentIndex > 0) {
            setSelectedImage(AlbumData[currentIndex - 1].url)
        } else {
            setSelectedImage(AlbumData[AlbumData.length - 1].url);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNextPage = () => {
        const maxPage = Math.ceil(allImages.length / imagesPerPage)
        if (currentPage < maxPage) {
            setCurrentPage(currentPage + 1)
        }
    }


    return (
        <div id='fotosgral-container'>
            <ul className='fotosgral'>
                {chunkArray(imagesToDisplay, 1).map((grupo, index) => (
                    <li key={index} id='img'>
                        {grupo.map((imagen, subIndex) => (
                            <img key={subIndex} src={imagen.url} alt={imagen.titulo} onClick={() => handleImageClick(imagen.url)} className='img' />
                        ))}
                    </li>
                ))}
            </ul>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>
                    Anterior
                </button>
                <button onClick={handleNextPage} disabled={currentPage === Math.ceil(AlbumData.length / imagesPerPage)}>
                    Siguiente
                </button>
            </div>
            {selectedImage && (
                <div ref={containerImageRef} className="container-image">
                    <div className="slider">
                        <img src={FlechaIzquierda} alt="Atras" className="flecha izquierda" id='izq' onClick={beforeImage} />
                        <img src={selectedImage} alt="" ref={imageContainerRef} className="img-show" />
                        <img src={FlechaDerecha} alt="Siguiente" className="flecha derecha" id='der' onClick={nextImage} />
                        <div className="flechasResp">
                            <img src={FlechaIzquierda} alt="Atras" className="flecha izquierda-resp" onClick={beforeImage} />
                            <img src={FlechaDerecha} alt="Siguiente" className="flecha derecha-resp" onClick={nextImage} />
                        </div>
                    </div>
                    <div className="ci-close" onClick={() => handleImageClick()}>
                        <i className="bx bx-x"></i>
                    </div>
                </div>
            )}
        </div >
    )
}

export default Fotos
