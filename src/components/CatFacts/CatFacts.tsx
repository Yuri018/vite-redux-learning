import{CatFactsWrapper, CatFactsContainer, Paragraph} from './styles'

import{catFactSelector} from 'store/redux/catFacts/selectors'

import{getCatFacts} from 'store/redux/catFacts/catFactsSlice'

import{useDispatch, useSelector} from 'react-redux'

import Button from 'components/Button';

import {AppDispatch } from 'store/store'

import { v4 } from "uuid"


function CatFacts() {
    const dispatch: AppDispatch = useDispatch()
    const { data, error, isLoading } = useSelector(catFactSelector)

    console.log(data)
    console.log(error)
    console.log(isLoading)

    return <CatFactsWrapper>
        <CatFactsContainer>
            <Button name='Get Cat Fact' onClick={()=>{
                dispatch(getCatFacts() as any)
            }}/>
            {isLoading && <Paragraph>LOADING...</Paragraph>}
            {data && (
          <>
            <Paragraph>{data.fact}</Paragraph>
            {/* <Paragraph>{data.punchline}</Paragraph> */}
          </>
        )}
        {error && alert("Ошибка сети")}
        </CatFactsContainer>

    </CatFactsWrapper>
}

export default CatFacts;
