import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);  // Função que será executada para realizar a pesquisa
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <input
        type="text"
        placeholder="Pesquisar..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        onKeyPress={event => {  // Permite pesquisar com Enter
          if (event.key === 'Enter') {
            handleSearch();
          }
        }}
        style={{ marginRight: '10px' }}
      />
      <FontAwesomeIcon icon={faSearch} onClick={handleSearch} style={{ cursor: 'pointer' }} />
    </div>
  );
};

export default SearchComponent;
