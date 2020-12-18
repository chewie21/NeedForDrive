import {AccountContainer, ContentContainer, MenuSection, MobileContainer} from "./AdminMenu.styled";
import {IconImage} from "../../../../Common/IconImage/IconImage";
import {Text} from "../../../../Common/Text/Text";
import {Link} from "react-router-dom";
import {AdminButton} from "../../../../Common/Button/AdminButton";
import React from "react";

export const AdminMenuMobile = ({menuSections, changeMenuSection, logout, toggle}) =>
	<MobileContainer>
		<ContentContainer>
			{menuSections.map((item, index) => (
				<Link
					to={item.link}
					key={index}
					onClick={() => {
						changeMenuSection(item);
						toggle();
					}}>
					{item.active ?
						<MenuSection index={index} border='4px solid #007BFF' padding='22px'>
							<IconImage
								height='14.5px'
								width='14.5px'
								margin='0 12px 0 0'
								img={item.img}
							/>
							<Text
								weight='normal'
								size='15px'
								margin='0'
								color='#007BFF'
							>
								{item.name}
							</Text>
						</MenuSection>
						:
						<MenuSection index={index} padding='26px'>
							<IconImage
								height='14.5px'
								width='14.5px'
								margin='0 12px 0 0'
								img={item.img}
							/>
							<Text
								weight='normal'
								size='15px'
								margin='0'
								color='#3D5170'
							>
								{item.name}
							</Text>
						</MenuSection>}
				</Link>
			))}
		</ContentContainer>
		<AccountContainer>
			<AdminButton
				size='11.5px'
				padding='8px'
				color='#CB3656'
				width='100%'
				onClick={logout}
			>
				Выйти
			</AdminButton>
		</AccountContainer>
	</MobileContainer>