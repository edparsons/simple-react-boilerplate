import styled, { CreateStyled } from '@emotion/styled';

type Theme = {
    colors: {
        primary: string
    }
};

export default styled as CreateStyled<Theme>;
