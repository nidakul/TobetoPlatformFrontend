import axios, {AxiosResponse} from "axios";

export class BaseService<
	GetAllType,
	GetByIdType,
	AddRequestType,
	AddResponseType,
	UpdateRequestType,
	UpdateResponseType,
> {
	public apiUrl: string;

	constructor() {
		this.apiUrl = "";
	}

	getAll(pageIndex: number, pageSize: number): Promise<AxiosResponse<GetAllType, any>> {
		return axios.get<GetAllType>(this.apiUrl+`?PageIndex=${pageIndex}&PageSize=${pageSize}`);
	}

	getById(id: number): Promise<AxiosResponse<GetByIdType, any>> {
		return axios.get<GetByIdType>(this.apiUrl + "/" + id);
	}

	add(request: AddRequestType): Promise<AxiosResponse<AddResponseType, any>> {
		return axios.post<AddResponseType>(this.apiUrl, request);
	}

	update(
		request: UpdateRequestType,
	): Promise<AxiosResponse<UpdateResponseType, any>> {
		return axios.put<UpdateResponseType>(this.apiUrl, request);
	}

	delete(id: number) {
		return axios.delete(this.apiUrl + "/" + id);
	}
}

