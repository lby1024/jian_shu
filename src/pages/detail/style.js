import styled from 'styled-components'

export const DetailWrapper = styled.div`
    min-height: 100vh;
    max-width: 750px;
    margin: 0 auto;
    padding-top: 21px;
	padding-bottom: 99px;
    h3{
        font-size: 34px;
        text-align: center;
		margin-top: 12px;
		margin-bottom: 39px;
    }
`

export const Content = styled.div`
	color: #2f2f2f;
	img {
		width: 100%;
	}
	h3{
		margin: 33px 0;
		font-size: 18px;
		font-weight: bolder;
		line-height: 30px;
		text-align: left;
	}
	p {
		margin: 25px 0;
		font-size: 16px;
		line-height: 30px;
	}
	b {
		font-weight: bold;
	}
`