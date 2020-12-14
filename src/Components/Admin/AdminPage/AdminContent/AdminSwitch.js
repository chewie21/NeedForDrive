import {Redirect, Route, Switch} from "react-router-dom";

import {AdminOrders} from "./AdminOrders/AdminOrders";
import {AdminCars} from "./AdminCars/AdminCars";
import {AdminOrderInfo} from "./AdminOrders/AdminOrderInfo/AdminOrderInfo";
import {AdminCarsInfo} from "./AdminCars/AdminCarsInfo/AdminCarsInfo";

export const AdminSwitch = ({
		auth,
		history,
		cities,
		points,
		cars,
		rate,
		orderStatus,
		categories
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
				/>
			}
		/>
		<Redirect from='/' to='/admin/orders'/>
	</Switch>