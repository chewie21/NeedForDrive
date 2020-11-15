import React, {useState} from "react";
import {CarListContainer, CategoryContainer} from "./Step2.styled";
import {Category} from "./Category";
import {CarList} from "./CarList";
import Spinner from "react-bootstrap/Spinner";
import {Text} from "../../../../Common/Text/Text";

export const Step2 = ({
      order, setOrder,
      cars, categories,
      changeUnlockSteps
    }) => {

    const [filter, setFilter] = useState('Все модели');

    return (
        (cars.loading && categories.loading) ?
            <Spinner animation="border"/> :
                (cars.response && categories.response) ?
                    <React.Fragment>
                        <CategoryContainer>
                            <Category
                                filter={filter}
                                setFilter={setFilter}
                                {...categories}
                            />
                        </CategoryContainer>
                        <CarListContainer>
                            <CarList
                                filter={filter}
                                setFilter={setFilter}
                                order={order}
                                setOrder={setOrder}
                                changeUnlockSteps={changeUnlockSteps}
                                {...cars}
                            />
                        </CarListContainer>
                    </React.Fragment> :
                    <Text
                        weight='500'
                        size='18px'
                        color='#121212'
                    >Что-то пошло не так... Перезагрузите страницу или
                        обратитесь в службу поддержки</Text>

    )
}