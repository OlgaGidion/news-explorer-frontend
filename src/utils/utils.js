const closeEffect = (isOpen, onClose) => () => {
  const handleDocumentKeydown = (evt) => {
    if (evt.key === 'Escape') {
      onClose();
    }
  };

  if (isOpen) {
    document.addEventListener('keydown', handleDocumentKeydown);
  }

  return () => {
    document.removeEventListener('keydown', handleDocumentKeydown);
  };
};

export { closeEffect };
