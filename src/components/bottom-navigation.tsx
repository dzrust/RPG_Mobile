import React, {FC, useMemo} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faSearch,
  faShoppingCart,
  faUser,
  IconDefinition,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faHome as faHomeRegular,
  faShoppingCart as faShoppingCartRegular,
  faUser as faUserRegular,
} from "@fortawesome/pro-regular-svg-icons";
import {Box, Center, HStack, Icon, Pressable, Text} from "native-base";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";

const routeIconTable = new Map<
  string,
  {activeIcon: IconDefinition; inactiveIcon: IconDefinition}
>();

routeIconTable.set("home", {
  inactiveIcon: faHomeRegular,
  activeIcon: faHome,
});
routeIconTable.set("settings", {
  inactiveIcon: faUserRegular,
  activeIcon: faUser,
});

const BottomNavigation: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  return (
    <Box flex={1} bg="white" safeAreaTop width="full" alignSelf="center">
      <Center flex={1}></Center>
      <HStack bg="indigo.600" alignItems="center" safeAreaBottom shadow={6}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const routeIcon = routeIconTable.get(route.name);

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              // The `merge: true` option makes sure that the params inside the tab screen are preserved
              navigation.navigate({
                name: route.name,
                merge: true,
                params: undefined,
              });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <Pressable
              key={route.key}
              cursor="pointer"
              opacity={isFocused ? 1 : 0.5}
              py="3"
              flex={1}
              onPress={onPress}
              onLongPress={onLongPress}>
              <Center>
                {routeIcon ? (
                  <Icon
                    mb="1"
                    as={
                      <FontAwesomeIcon
                        icon={
                          isFocused
                            ? routeIcon.activeIcon
                            : routeIcon.inactiveIcon
                        }
                      />
                    }
                    color="white"
                    size="sm"
                  />
                ) : null}
                <Text color="white" fontSize="12">
                  {label}
                </Text>
              </Center>
            </Pressable>
          );
        })}
      </HStack>
    </Box>
  );
};

export default BottomNavigation;
