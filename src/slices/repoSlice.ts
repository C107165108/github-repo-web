import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData, fetchDetail, fetchUser } from '../API/index'
import { FetchUserType, FetchDetailType, FetchDataType } from '../API/index'

export const getRepoCount = createAsyncThunk('repo/fetchUser', async (body: FetchUserType) => {
  return await fetchUser(body)
})

export const getRepo = createAsyncThunk('repo/fetchData', async (body: FetchDataType) => {
  return await fetchData(body)
})

export const getRepoDetail = createAsyncThunk('repo/fetchDetail', async (body: FetchDetailType) => {
  return await fetchDetail(body)
})

interface CounterState {
  data: Array<{
    id: string,
    name: string,
    stargazers_count: number
  }>,
  repoCount: number,
  page: number,
  userName: String,
  detail: {
    full_name: string,
    visibility: string,
    description: string,
    stargazers_count: string,
    html_url: string,
    language: string,
  },
  detailLoading: Boolean,
}

// Define the initial state using that type
const initialState: CounterState = {
  data: [],
  repoCount: 0,
  page: 1,
  userName: '',
  detail: {
    full_name: '',
    visibility: '',
    description: '',
    stargazers_count: '',
    html_url: '',
    language: '',
  },
  detailLoading: false,
}

const repoSlice = createSlice({
  name: "repo",
  initialState,
  reducers: {
    storeSearch: (state, { payload }) => {
      state.userName = payload
    },
    storePage: (state, { payload }) => {
      state.page = payload.page
    },
    resetData: (state) => {
      state.data = []
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getRepoCount.fulfilled, (state, { payload }) => {
      state.repoCount = payload.data.public_repos
    });
    builder.addCase(getRepo.fulfilled, (state, { payload }) => {
      state.data = state.data.concat(payload.data)
    });
    builder.addCase(getRepoDetail.fulfilled, (state, { payload }) => {
      state.detail = payload.data
      state.detailLoading = false
    });
    builder.addCase(getRepoDetail.pending, (state) => {
      state.detailLoading = true
    });
  },
})

export const { storeSearch, storePage, resetData } = repoSlice.actions;
export default repoSlice.reducer;