import React from 'react'

import Footer from "../../components/footer/footer";
import SchoolHeader from "./schoolHeader/schoolHeader";
import SchoolContent from "./schoolContent/schoolContent";

import * as Style from './styled'

const School = () => {
	return (
	  <>
      <Style.Wrapper>
        <SchoolHeader/>

        <SchoolContent/>
      </Style.Wrapper>

      <Footer/>
    </>
	)
}

export default School