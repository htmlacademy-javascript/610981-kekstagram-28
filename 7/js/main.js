import { getPhotoCards } from './data.js';
import { renderThumbnails } from './thumbnail.js';
import './modal.js';
import { createContainerListener } from './modal.js';
const photoDescriptions = getPhotoCards();

renderThumbnails(photoDescriptions);
createContainerListener(photoDescriptions);

