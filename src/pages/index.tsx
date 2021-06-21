import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import styled from '@commons/style/themes/styled';
import { testApi } from '@src/containers/Test/api';
import { RootState } from '@src/reducers';
import { LOAD_TEST } from '@src/containers/Test/constants';
import api from '@src/utils/AxiosUtils';

function IndexPage(): JSX.Element {
  return <div></div>;
}

export default IndexPage;
