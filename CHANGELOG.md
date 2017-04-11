#v1.3.5
Nothing big here, just updating React to 15.5 and refactoring our PropType refs
to use the `prop-types` package.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.5
```

npm:
```
npm install whiplash-ui-library@1.3.5 --exact
```


#v1.3.4
Quick little update for the <Modal /> & performance!

* BREAKING CHANGES: <Modal /> removed modalWidth & logo props
* UPDATE: <Modal /> styles are less traditional and more modern
* PERF UPDATE: <InformationalIcon /> now ref single var vs. recreating Component

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.4
```

npm:
```
npm install whiplash-ui-library@1.3.4 --exact
```

#v1.3.3
Aw, yeah! We got some new goodies for you in this small update!

* NEW: <Textarea /> Component
* UPDATE: added `inverted` prop on the <Table /> Component for alt style
* UPDATE: <Input /> now has a default value style in case you need to load your
Component with a given value.

As always, check out the docs for all your questions, etc.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.3
```

npm:
```
npm install whiplash-ui-library@1.3.3 --exact
```

#v1.3.2
Gotcha! We snuck in a small update that gives the `<Toggle />` a little more
juice for your needs. You can now dynamically control the state of the Toggle
in addition to having a `callback` prop that returns the `defaultChecked` state
of the input.

As always, check out the new docs on it for all your questions, etc.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.2
```

npm:
```
npm install whiplash-ui-library@1.3.2 --exact
```

#v1.3.1
Ey, yo! Boy, do we have a awesome patch release for you. Not only did we give
the demo site a small face lift, we brought you `<DatePicker />`! It's pretty
rad and comes built with moment.js.

Be sure to check out our docs on how to use it. Keep an eye out for the next big
Component to be added to the library (`<TimePicker />`);

As always, thanks again for hanging with us and a special thanks to the AirBnB
team for giving us a good starting point with our DatePicker.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.1
```

npm:
```
npm install whiplash-ui-library@1.3.1 --exact
```


#v1.3.0
Hey! It's a minor release! We have a lot of stuff to cover with some breaking
changes regarding some Components, so here we go!

#### New
* `<SelectBox />`
* `<Table />`
* Docs are now easier to read!
* `<Input />` now comes in 2 flavors: basic and default. Addtionally, you can now add a `search` prop and we'll deliver a sexy search UI input (basic only). Just as well, we plus'd up the password input to toggle visibility

#### Breaking:
* `<Icon />/<InformationalIcon />` will now match the width of the container element if no `height`, `width` props given
* `<Button />` eliminates the `buttonType` prop in exchange for passing down all props given (`type="button"`, etc.)

#### Updates:
* Cleaner fonts
* `<Dropdown />` renders children much better

Bada-bing, bada-boom! Keep a look out cause like always, we ain't done adding/adapting this sucka!


#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.3.0
```

npm:
```
npm install whiplash-ui-library@1.3.0 --exact
```


#v1.2.1
With this small update comes the new `<Dropdown />` Component! Basically, all
you do is add the children you want to display and Dropdown turns it into a
toggable list! Additionally, we have now removed the console message for the `<Button />`
Component if you did not include the optional `callback` prop. Along with that, we
tightened up the `<Legend />` Component to only trigger the `callback` prop for
"completed" dots. Nioce.

We are cooking now, so keep your eyes peeled for more Components being added
by the weeks.

Check out the demo site for all info needed for this update.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.2.1
```

npm:
```
npm install whiplash-ui-library@1.2.1 --exact
```


#v1.1.1
This nice little update brings a cleaner `<CheckButton />` Component now only
accepting a `defaultSelected` prop to compliment expected React behavior in
addition to the introduction of the `<Toggle />` Component!

Check out the demo site for all info needed for both of these updates.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.1.1
```

npm:
```
npm install whiplash-ui-library@1.1.1 --exact
```

#v1.0.7
Ever find yourself needing to post a small "flash" message in the UI that is just
temporary but imperitive for informing the user about something which has happened?
Look no further, for the NotificationToast Component is here! 🎉

It comes with a default, pending, and error theme to meet your needs.

Keep a look out for our next update which will close out this milestone bringing the
ShopCard Component.

It will be a "card" influenced component that will display information along with
including a footer to add extra icons for things if you need them.

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.0.7 --exact
```

npm:
```
npm install whiplash-ui-library@1.0.7 --exact
```

#v1.0.5
Nothing big here, just a small adjustment to the Button docs and a style update
for the `secondary-dark` Button `theme`. 😎

#v1.0.3
Alrighty! Just in time for the holiday's, we have a pretty big update including:

* New brand fonts: Aller Light & Lato
* Updated UI's for all existing Components
* NEW `Icon` COMPONENT! 🎉
* NEW `InformationalIcon` COMPONENT! 🎉
* NEW `CheckBox` COMPONENT! 🎉
* REMOVAL OF APHRODITE! 🎉 🎉

Now that we no longer depend on Aphrodite, you don't have to worry about it
failing your tests like a freaking n00b. Check out our README and ensure that
you are including a default `font-size: 16px` in your app to make sure our
library is cohesive (we use `rems`).

We have more components coming at the start of next year, so keep an eye out!

#### Upgrading
yarn:
```
yarn upgrade whiplash-ui-library@1.0.3 --exact
```

npm:
```
npm install whiplash-ui-library@1.0.3 --exact
```

#v.0.0.9
Hey, d00ds! Nothing big here, just a small update on the `Legend` component.
We've added a better UI to make it easier to understand that you have completed
the items that fall before the active one.

Have a great day and go vote, suckas!

#v.0.0.8
Aw yeah, we snuck in a tiny update 🎉! Meet the `Legend` component. It's great
for pagination usage or any place where you need to show where along the process
a user is (i.e. step 2 of 4). Check out the demo site for usage info. That's
all we have for now, but the big icon lib component is coming very soon,
so watch out!


# v0.0.7
Hey, there! 👋 As always, thanks for checking out the first installments of the
Whiplash React UI Library. This change brings an updated UI for the
docs/examples in addition to a new `Breadcrumb` component! 🍞

Additionally, due to the fast response we've had from the installs, we are
now making the repo public so you can
[submit bugs](https://github.com/whiplashmerch/whiplash-ui-library/issues)
if you find any or add feature requests to any of the living Components.

As of right now, we are not allowing any contributions outside of that. 😿

### Future Components
The next versions will introduce a bunch of new Components that will lead up to
the `0.1.0` release ("Be cool Ice Cold, be cool.")!

* ShopCard
* ICONS! 😎
* RadioBtn
* InputStatusIcon
* Legend
* DropdownBtn

Thanks again and we hope you stick around as we grow this resource for the React
community.
