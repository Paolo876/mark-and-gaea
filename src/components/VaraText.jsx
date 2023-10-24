import React, { useState, useEffect } from 'react'
import Vara from 'vara';

const VaraText = ({ text, id }) => {
  
	useEffect(() => {
		const vara = new Vara(
			"#vara-container",
			"https://raw.githubusercontent.com/akzhy/Vara/master/fonts/Satisfy/SatisfySL.json",
			[
				{
					text,
					fontSize: 40,
					strokeWidth: 0.7,
				},
			],
		);
	}, []);

  return (
    <div id="vara-container"></div>
  )
}

export default VaraText