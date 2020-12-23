import {Redirect, Route, Switch} from "react-router-dom";

import {AdminOrders} from "./AdminOrders/AdminOrders";
import {AdminCars} from "./AdminCars/AdminCars";
import {AdminOrderInfo} from "./AdminOrders/AdminOrderInfo/AdminOrderInfo";
import {AdminCarsInfo} from "./AdminCars/AdminCarsInfo/AdminCarsInfo";
import {AdminCities} from "./AdminCities/AdminCities";
import {AdminCitiesInfo} from "./AdminCities/AdminCitiesInfo/AdminCitiesInfo";
import {AdminPoints} from "./AdminPoints/AdminPoints";
import {AdminPointsInfo} from "./AdminPoints/AdminPointsInfo/AdminPointsInfo";
import {AdminCategories} from "./AdminCategories/AdminCategories";
import {AdminCategoriesInfo} from "./AdminCategories/AdminCategoriesInfo/AdminCategoriesInfo";
import {AdminOrderStatus} from "./AdminOrderStatus/AdminOrderStatus";
import {AdminStatusInfo} from "./AdminOrderStatus/AdminStatusInfo/AdminStatusInfo";
import {AdminRateType} from "./AdminRateType/AdminRateType";
import {AdminRateTypeInfo} from "./AdminRateType/AdminRateTypeInfo/AdminRateTypeInfo";
import {AdminRate} from "./AdminRate/AdminRate";
import {AdminRateInfo} from "./AdminRate/AdminRateInfo/AdminRateInfo";

export const AdminSwitch = ({
		auth,
		history,
		cities,
		points,
		cars,
		rate,
		orderStatus,
		categories,
		rateType
	}) =>
	<Switch>
		<Route
			exact path='/admin/orders'
			render={() =>
				<AdminOrders
					auth={auth}
					history={history}
					cities={cities}
					cars={cars}
					orderStatus={orderStatus}
				/>
			}
		/>
		<Route
			path='/admin/orders/:id'
			render={(props) =>
				<AdminOrderInfo
					{...props}
					auth={auth}
					history={history}
					cities={cities}
					cars={cars}
					rate={rate}
					orderStatus={orderStatus}
					points={points}
				/>
			}
		/>
		<Route
			exact path='/admin/orderStatus'
			render={() =>
				<AdminOrderStatus
					auth={auth}
					history={history}
					orderStatus={orderStatus}
				/>
			}
		/>
		<Route
			exact path='/admin/orderStatus/:id'
			render={(props) =>
				<AdminStatusInfo
					{...props}
					auth={auth}
					history={history}
					orderStatus={orderStatus}
				/>
			}
		/>
		<Route
			exact path='/admin/cars'
			render={() =>
				<AdminCars
					history={history}
					auth={auth}
					cars={cars}
					categories={categories}
				/>
			}
		/>
		<Route
			exact path='/admin/cars/:id'
			render={(props) =>
				<AdminCarsInfo
					{...props}
					auth={auth}
					history={history}
					categories={categories}
					cars={cars}
				/>
			}
		/>
		<Route
			exact path='/admin/categories'
			render={() =>
				<AdminCategories
					auth={auth}
					history={history}
					categories={categories}
				/>
			}
		/>
		<Route
			exact path='/admin/categories/:id'
			render={(props) =>
				<AdminCategoriesInfo
					{...props}
					auth={auth}
					history={history}
					categories={categories}
				/>
			}
		/>
		<Route
			exact path='/admin/cities'
			render={() =>
				<AdminCities
					auth={auth}
					history={history}
					cities={cities}
				/>
			}
		/>
		<Route
			exact path='/admin/cities/:id'
			render={(props) =>
				<AdminCitiesInfo
					{...props}
					auth={auth}
					history={history}
					cities={cities}
				/>
			}
		/>
		<Route
			exact path='/admin/points'
			render={() =>
				<AdminPoints
					auth={auth}
					history={history}
					cities={cities}
					points={points}
				/>
			}
		/>
		<Route
			exact path='/admin/points/:id'
			render={(props) =>
				<AdminPointsInfo
					{...props}
					auth={auth}
					history={history}
					cities={cities}
					points={points}
				/>
			}
		/>
		<Route
			exact path='/admin/rateType'
			render={() =>
				<AdminRateType
					auth={auth}
					history={history}
					rateType={rateType}
				/>
			}
		/>
		<Route
			exact path='/admin/rateType/:id'
			render={(props) =>
				<AdminRateTypeInfo
					{...props}
					auth={auth}
					history={history}
					rateType={rateType}
				/>
			}
		/>
		<Route
			exact path='/admin/rate'
			render={() =>
				<AdminRate
					auth={auth}
					history={history}
					rateType={rateType}
					rate={rate}
				/>
			}
		/>
		<Route
			exact path='/admin/rate/:id'
			render={(props) =>
				<AdminRateInfo
					{...props}
					auth={auth}
					history={history}
					rateType={rateType}
					rate={rate}
				/>
			}
		/>
		<Redirect from='/' to='/admin/orders'/>
	</Switch>