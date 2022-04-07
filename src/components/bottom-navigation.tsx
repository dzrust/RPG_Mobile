import React, {FC} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {
  faHome,
  faScroll,
  faHelmetBattle,
  faBalanceScale,
  faRing,
  IconDefinition,
} from "@fortawesome/pro-solid-svg-icons";
import {
  faHome as faHomeRegular,
  faScroll as faScrollRegular,
  faHelmetBattle as faHelmetBattleRegular,
  faBalanceScale as faBalanceScaleRegular,
  faRing as faRingRegular,
} from "@fortawesome/pro-regular-svg-icons";
import {Box, Center, HStack, Pressable, Text, useTheme} from "native-base";
import {BottomTabBarProps} from "@react-navigation/bottom-tabs";
import {ROUTES} from "../models/routes";

const routeIconTable = new Map<
  ROUTES,
  {activeIcon: IconDefinition; inactiveIcon: IconDefinition}
>();

routeIconTable.set(ROUTES.HOME, {
  inactiveIcon: faHomeRegular,
  activeIcon: faHome,
});
routeIconTable.set(ROUTES.LEGENDS, {
  inactiveIcon: faScrollRegular,
  activeIcon: faScroll,
});
routeIconTable.set(ROUTES.HEROES, {
  inactiveIcon: faHelmetBattleRegular,
  activeIcon: faHelmetBattle,
});
routeIconTable.set(ROUTES.RULES, {
  inactiveIcon: faBalanceScaleRegular,
  activeIcon: faBalanceScale,
});
routeIconTable.set(ROUTES.SETTINGS, {
  inactiveIcon: faRingRegular,
  activeIcon: faRing,
});

const BottomNavigation: FC<BottomTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  const {colors} = useTheme();
  return (
    <Box
      bg={colors.primary[100]}
      safeAreaTop
      width="full"
      alignSelf="center"
      height="20">
      <Center flex={1} />
      <HStack
        bg={colors.primary[900]}
        alignItems="center"
        safeAreaBottom
        shadow={6}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;
          const isFocused = state.index === index;
          const routeIcon = routeIconTable.get(route.name as ROUTES);

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
                  <FontAwesomeIcon
                    size={24}
                    color={colors.light[50]}
                    icon={
                      isFocused ? routeIcon.activeIcon : routeIcon.inactiveIcon
                    }
                  />
                ) : null}
                <Text color={colors.light[50]} fontSize="12">
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
