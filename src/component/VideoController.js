import { useEffect } from 'react';

const VideoController = () => {
    useEffect(() => {
        const showVideosButton = document.getElementById('showVideos');
        const closeVideosButton = document.querySelector('.cross');

        const showVideos = () => {
            // Get all video containers
            const videoContainers = document.querySelectorAll('.video-container');

            // Loop through each container and display it
            videoContainers.forEach(container => {
                container.style.display = 'block';
            });
        };

        const hideVideos = () => {
            // Get all video containers
            const videoContainers = document.querySelectorAll('.video-container');

            // Loop through each container and hide it
            videoContainers.forEach(container => {
                container.style.display = 'none';
            });
        };

        showVideosButton.addEventListener('click', showVideos);
        closeVideosButton.addEventListener('click', hideVideos);

        // Cleanup event listeners when component unmounts
        return () => {
            showVideosButton.removeEventListener('click', showVideos);
            closeVideosButton.removeEventListener('click', hideVideos);
        };
    }, []);

    return null; // Since this component doesn't render any UI, return null
};

export default VideoController;