/* eslint camelcase: "off", max-params: "off", prefer-arrow-callback: "off", prefer-template: "off", wrap-iife: "off" */

/* Removing references to istats because it has been decommissioned. Once Reverb */
/* supports link tracking, that code might be updated to use Reverb, or removed. */

// window.require(['istats-1'], function (istats) {
    (function () {

        var overflowOpen = { 'wide': false, 'secondary': false };
    
        var eventHandlers = {
    
            toggleWideMoreButton: {
                actuator: '.nw-c-nav__wide-morebutton',
                handler: function(event) {
                    var statEvent = {
                        action_type: 'toggle',
                        action_name: 'nav-wide-primary-overflow-visibility',
                        selector: '.nw-c-nav__wide-morebutton'
                    };
    
                    closeOverflow('secondary');
                    if (classUtil('has', '.nw-c-nav__wide-morebutton', 'nw-c-nav__wide-morebutton__closed')) {
                        classUtil('remove', '.nw-c-nav__wide-overflow', 'gs-u-display-none');
                        classUtil('swap', '.nw-c-nav__wide-morebutton', 'nw-c-nav__wide-morebutton__closed', 'nw-c-nav__wide-morebutton__open');
                        setAriaExpanded('.nw-c-nav__wide-morebutton', true);
                        logEvent(statEvent, { visibility: 'visible' });
                        overflowOpen.wide = true;
                    } else {
                        closeOverflow('wide');
                        logEvent(statEvent, { visibility: 'hidden' });
                    }
    
                    return handled(event);
                }
            },
    
            toggleWideSecondaryMoreButton: {
                actuator: '.nw-c-nav__secondary-morebutton',
                handler: function (event) {
                    var statEvent = {
                        action_type: 'toggle',
                        action_name: 'nav-wide-secondary-overflow-visibility',
                        selector: '.nw-c-nav__secondary-morebutton'
                    };
    
                    closeOverflow('wide');
                    if (classUtil('has', '.nw-c-nav__secondary-morebutton', 'nw-c-nav__secondary-morebutton__closed')) {
                        classUtil('remove', '.nw-c-nav__secondary-overflow', 'gs-u-display-none');
                        classUtil('swap', '.nw-c-nav__secondary-morebutton', 'nw-c-nav__secondary-morebutton__closed', 'nw-c-nav__secondary-morebutton__open');
                        setAriaExpanded('.nw-c-nav__secondary-morebutton', true);
                        logEvent(statEvent, { visibility: 'visible' });
                        overflowOpen.secondary = true;
                    } else {
                        closeOverflow('secondary');
                        logEvent(statEvent, { visibility: 'hidden' });
                    }
    
                    return handled(event);
                }
            },
            narrowPrimaryNav: {
                actuator: '.nw-c-nav__narrow-headerbutton',
                handler: function(event) {
                    var statEvent = {
                        action_type: 'toggle',
                        action_name: 'nav-narrow-primary-visibility',
                        selector: '.nw-c-nav__narrow-headerbutton'
                    };
    
                    if (classUtil('has', '.nw-c-nav__narrow-headerbutton', 'nw-c-nav__narrow-headerbutton--closed')) {
                        closeBottomNarrowNav();
                        closeSecondaryNarrowNav();
                        classUtil('add', '#site-container', 'gs-u-display-none');
                        classUtil('add', '#local-search-region', 'gs-u-display-none');
                        classUtil('add', '#nw-c-nav__narrow-section__heading', 'gs-u-display-none');
                        classUtil('add', '.nw-c-nav__narrow-secondary__panel', 'gs-u-display-none');
                        classUtil('swap', '.nw-c-nav__narrow-headerbutton', 'nw-c-nav__narrow-headerbutton--open', 'nw-c-nav__narrow-headerbutton--closed');
                        toggleAriaExpanded('.nw-c-nav__narrow-headerbutton');
                        classUtil('remove', '.nw-c-nav__narrow-top', 'gs-u-display-none@m');
                        classUtil('add', '.nw-c-nav__narrow-top', 'gs-u-display-block');
                        logEvent(statEvent, { visibility: 'visible' });
                    } else {
                        closeTopNarrowNav();
                        classUtil('remove', '.nw-c-nav__narrow-secondary__panel', 'gs-u-display-none');
                        logEvent(statEvent, { visibility: 'hidden' });
                    }
    
                    return handled(event);
                }
            },
            narrowSecondaryNav: {
                actuator: '.nw-c-nav__narrow-secondary__button',
                handler: function(event) {
                    var statEvent = {
                        action_type: 'toggle',
                        action_name: 'nav-narrow-secondary-visibility',
                        selector: '.nw-c-nav__narrow-secondary__button'
                    };
    
                    if (classUtil('has', '.nw-c-nav__narrow-secondary__button', 'nw-c-nav__item-closed')) {
                        classUtil('swap', '.nw-c-nav__narrow-secondary__panel', 'nw-c-nav__narrow-secondary__panel-closed', 'nw-c-nav__narrow-secondary__panel-open');
                        classUtil('swap', '.nw-c-nav__narrow-secondary__button', 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
                        toggleAriaExpanded('.nw-c-nav__narrow-secondary__button');
                        logEvent(statEvent, { visibility: 'visible' });
                    } else {
                        classUtil('swap', '.nw-c-nav__narrow-secondary__panel', 'nw-c-nav__narrow-secondary__panel-closed', 'nw-c-nav__narrow-secondary__panel-open');
                        classUtil('swap', '.nw-c-nav__narrow-secondary__button', 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
                        setAriaExpanded('.nw-c-nav__narrow-headerbutton', false);
                        logEvent(statEvent, { visibility: 'hidden' });
                    }
    
                    return handled(event);
                }
            },
            topNavTwisty: {
                actuator: '.nw-c-nav__narrow-top .nw-c-nav__twistable',
                handler: function(event) {
                    var currentAccordion = window.document.querySelectorAll('.nw-c-nav__narrow-top .nw-c-nav__twistable.nw-c-nav__item-open');
                    var targetAccordion = findParentAccordionButton(event, '.nw-c-nav__narrow-top .nw-c-nav__twistable');
                    var statEvent = {
                        on: 'stats:nav:narrow:top:primary:accordion:visibility',
                        action_type: 'toggle',
                        action_name: 'nav-narrow-top-primary-accordion-visibility'
                    };
    
                    if (currentAccordion.length > 0 && currentAccordion[0] !== targetAccordion) {
                        classUtil('swap', currentAccordion[0], 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
                    }
                    classUtil('swap', targetAccordion, 'nw-c-nav__item-closed', 'nw-c-nav__item-open');
                    setAriaExpanded('.nw-c-nav__narrow-top .nw-c-nav__twistable', 'nw-c-nav__item-open');
    
                    logEvent(statEvent, {
                        visibility: getVisibilityStringFromAriaExpanded(targetAccordion),
                        link: getNameFromContentOfFirstChild(targetAccordion)
                    });
    
                    return handled(event);
                }
            },
            bottomNavButton: {
                actuator: '.nw-c-nav__narrow-footerbutton',
                handler: function(event) {
                    var statEvent = {
                            action_type: 'toggle',
                            action_name: 'nav-narrow-footer-visibility',
                            selector: '.nw-c-nav__narrow-footerbutton'
                        },
                        visibility = getVisibilityStringFromAriaExpanded(document.querySelectorAll('.nw-c-nav__narrow-footerbutton')[0]);
    
                    classUtil('swap', '.nw-c-nav__narrow-footerbutton', 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
                    classUtil('toggle', '.nw-c-nav__narrow-bottom', 'gs-u-display-block gs-u-display-none@m');
                    toggleAriaExpanded('.nw-c-nav__narrow-footerbutton');
                    logEvent(statEvent, { visibility: visibility });
    
                    return handled(event);
                }
            },
            bottomNavTwisty: {
                actuator: '.nw-c-nav__narrow-bottom .nw-c-nav__twistable',
                handler: function(event) {
                    var currentAccordion = window.document.querySelectorAll('.nw-c-nav__narrow-bottom .nw-c-nav__twistable.nw-c-nav__item-open');
                    var targetAccordion = findParentAccordionButton(event, '.nw-c-nav__narrow-bottom .nw-c-nav__twistable');
    
                    if (currentAccordion.length > 0 && currentAccordion[0] !== targetAccordion) {
                        classUtil('swap', currentAccordion[0], 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
                    }
                    classUtil('swap', targetAccordion, 'nw-c-nav__item-closed', 'nw-c-nav__item-open');
                    setAriaExpanded('.nw-c-nav__narrow-bottom .nw-c-nav__twistable', 'nw-c-nav__item-open');
    
                    return handled(event);
                }
            },
            cancelDialogs: {
                actuator: document,
                event: 'keydown',
                handler: function(event) {
                    var ESC = 27,
                        theEvent = event || window.event;
    
                    if (theEvent.keyCode === ESC) {
                        restoreNormality();
                    }
                }
            }
        };
    
        //  More button handler
        //  Handles the floating 'More' button on the end of the primary and secondary wide nav.
        //
        //  Called on a window resize, it redistributes the navigation items that won't fit on the screen into the 'overflow'
        //  area that is opened by the 'More' button. It does this by:
        //      - Ensuring that the More button is visible and removing it from the navigation.
        //      - Moving the menu entries from the overflow area onto the end of the navigation.
        //      - Resetting the overflow area, ready to recieve the new overflow.
        //      - Putting the More button onto the front of the navigation.
        //      - Shuffling the More button forwards along the navigation until it wraps.
        //      - if the More button did not wrap (so the entire Navigation fits on the screen)
        //          - Hiding the More button and the overflow area
        //      - if the More button wrapped (so the entire Navigation does not fit on the screen)
        //          - Shuffling the More button back one.
        //          - Moving all of the navigation entries after the More button into the overflow area.
        //          - 'Selecting' the More button if the menu entry for this page is in the overflow area.
        //
        //  Entries in the overflow are organised into columns, where the most recent thing to be displaced by the More
        //  button is put at the top of the leftmost column. Also navigation entries are display:inline while in
        //  the navigation, and display:block in the overflow area.
        //
        /* eslint-disable complexity */
    
        function handleMoreButton(kind) {
            var col = 0,
                columnUl = null,
                columnsToCreate = 0,
                menuItem = null,
                moreButtonLi = null,
                moreButtonSelection = 'remove',
                numberOfEntries = 0,
                oIndex = 0,
                overflowDiv = null,
                overflowList = null,
                row = 0,
                sectionIndex = 0,
                sections = null,
                width = 0;
    
            var columns = {
                    600: 2,
                    900: 4,
                    1008: 4,
                    1280: 5
                },
                entriesPerColumn = [0, 0, 0, 0, 0, 0];
    
            var classAttribute = 'nw-c-nav__' + kind + '-overflow-list-column__bordered',
                moreButtonSelected = 'nw-c-nav__' + kind + '-morebutton__selected',
                moreButtonSelector = 'nw-c-nav__' + kind + '-morebutton',
                morebuttonContainerSelector = '.nw-c-nav__' + kind + '-morebutton-container',
                overflowListSelector = '.nw-c-nav__' + kind + '-overflow-list',
                sectionsSelector = '.nw-c-nav__' + kind + '-sections';
    
            var sectionsDiv = document.querySelectorAll(sectionsSelector),
                sectionList = sectionsDiv[0];
    
            if (!sectionList) {
                return;
            }
    
            // Make the More button visible and remove it from the list
            classUtil('remove', morebuttonContainerSelector, 'gs-u-display-none');
            classUtil('add', morebuttonContainerSelector, 'gs-u-float-left');
            sections = sectionList.childNodes;
            for (sectionIndex = 0; sectionIndex < sections.length; sectionIndex += 1) {
                if (sections[sectionIndex].className.indexOf(moreButtonSelector) >= 0) {
                    moreButtonLi = sectionList.removeChild(sections[sectionIndex]);
                    break;
                }
            }
    
            // Move the menu entries in the UL entries in the overflow list to the end of the menu list
            overflowDiv = document.querySelectorAll(overflowListSelector);
            overflowList = overflowDiv[0];
            if ('childNodes' in overflowList) {
                for (oIndex = 0; oIndex < overflowList.childNodes.length; oIndex += 1) {
    
                    // one of the UL's containing the actual nav entries
                    columnUl = overflowList.childNodes[oIndex];
                    while (columnUl.childNodes.length > 0) {
                        menuItem = columnUl.removeChild(columnUl.childNodes[0]);
                        classUtil('swap', menuItem, 'gs-u-display-block', 'gs-u-float-left');
                        sectionList.appendChild(menuItem);
                    }
                }
            }
    
            // Reset the overflow area by removing any column ULs
            while (overflowList.childNodes.length > 0) {
                overflowList.removeChild(overflowList.childNodes[0]);
            }
    
            // If the whole of the nav, excluding the More button, fits on the screen, hide the More button and overflow area
            if (sections[sections.length - 1].offsetTop === sections[0].offsetTop) {
                // more button goes on the end, to avoid the left-side separator being visible
                sectionList.insertBefore(moreButtonLi, sectionList.childNodes[sectionList.childNodes.length - 1]);
                classUtil('remove', morebuttonContainerSelector, 'gs-u-float-left');
                classUtil('add', morebuttonContainerSelector, 'gs-u-display-none');
                closeOverflow(kind);
    
                return;
            }
    
            // Add the More button to to front of the menu
            sectionList.insertBefore(moreButtonLi, sectionList.childNodes[0]);
            sections = sectionList.childNodes;
    
            // Shuffle the More button along the menu until it wraps
            for (sectionIndex = 0; sectionIndex < sections.length - 1; sectionIndex += 1) {
                if (sections[sectionIndex].offsetTop !== sections[0].offsetTop) {
    
                    // More button must have wrapped - move it back one
                    moreButtonLi = sectionList.removeChild(sections[sectionIndex]);
                    sectionList.insertBefore(moreButtonLi, sections[sectionIndex - 1]);
                    break;
                }
    
                if (sectionIndex + 1 < sections.length - 1) {
                    moreButtonLi = sectionList.removeChild(sections[sectionIndex]);
                    sectionList.insertBefore(moreButtonLi, sections[sectionIndex + 1]);
                }
            }
    
            // Move all the menu UL items after the More button (staring at item [sectionIndex]) to the overflow list, preserving the order.
            // Put them into columns based on the available width, and change the display from inline to block
            // (n.b. the column distribution algorithm attempts to get balanced columns, but filled from the left)
            columnsToCreate = 0;
            for (width in columns) {
                if (window.innerWidth >= width) {
                    columnsToCreate = columns[width];
                }
            }
    
            for (numberOfEntries = sections.length - sectionIndex; numberOfEntries > 0; numberOfEntries -= 1) {
                entriesPerColumn[col] += 1;
                col = (col + 1) % columnsToCreate;
            }
    
            row = 0;
            col = 0;
            sections = sectionList.childNodes;
            while (sections.length > sectionIndex) {
                if (sections.length - sectionIndex <= entriesPerColumn[col]) {
                    classAttribute = '';
                }
    
                if (row === 0) {
                    columnUl = document.createElement('ul');
                    columnUl.setAttribute('class', 'gs-o-list-ui gs-o-list-ui--top-no-border gel-pica gs-u-float-left nw-c-nav__' + kind + '-overflow-list-column gs-u-display-block gel-layout__item gel-1/1 gel-1/2@m gel-1/4@l gel-1/5@xxl ' + classAttribute);
                    overflowList.appendChild(columnUl);
                    row = entriesPerColumn[col];
                    col += 1;
                }
                menuItem = sectionList.removeChild(sections[sectionIndex]);
                classUtil('replace', menuItem, 'gs-u-float-left', 'gs-u-display-block');
                columnUl.appendChild(menuItem);
                row -= 1;
                if (menuItem.className.indexOf('nw-c-nav__selected') >= 0) {
                    // this page's menu item is now in the overflow area; 'highlight' More button to bring attention to it
                    moreButtonSelection = 'add';
                }
            }
    
            while (col < columnsToCreate) {
                columnUl = document.createElement('ul');
                columnUl.setAttribute('class', 'gs-o-list-ui gs-o-list-ui--top-no-border gel-pica gs-u-float-left nw-c-nav__' + kind + '-overflow-list-column gs-u-display-block gel-layout__item gel-1/1 gel-1/2@m gel-1/4@l gel-1/5@xxl ' + classAttribute);
                overflowList.appendChild(columnUl);
                col += 1;
            }
    
            // 'select' the More button if the current page's entry is in the overflow area
            classUtil(moreButtonSelection, '.' + moreButtonSelector, moreButtonSelected);
        } /* eslint-enable complexity */
    
        function addListener(node, event, handler, useCapture) {
            var capture = arguments.length > 3 ? useCapture : false; // eslint-disable-line prefer-rest-params
    
            if (typeof window.addEventListener === 'function') {
                node.addEventListener(event, handler, capture);
            } else {
                node.attachEvent(event, handler);
            }
        }
    
        //  substitutions to aid accessability:
        //  - replace core-mode Sections link to narrow nav with a button
        //
        function accessabilitySwapouts() {
            var sectionsButton = document.createElement('button'),
                sectionsLink = document.getElementById('nw-c-core-navigation-link');
    
            sectionsButton.className = sectionsLink.className + ' gs-u-mr';
            sectionsButton.setAttribute('aria-expanded', sectionsLink.getAttribute('aria-expanded'));
            sectionsButton.setAttribute('aria-haspopup', sectionsLink.getAttribute('aria-haspopup'));
    
            while (sectionsLink.childNodes.length > 0) {
                sectionsButton.appendChild(
                    sectionsLink.removeChild(sectionsLink.childNodes[0])
                );
            }
            sectionsLink.parentElement.replaceChild(sectionsButton, sectionsLink);
        }
    
        //  operations on the class attribute of one or more nodes
        //
        /* eslint-disable array-callback-return, complexity, default-case, no-loop-func */
        function classUtil(operation, nodeOrSelector, arg1, arg2) {
            var classes = [],
                index = 0,
                node = null,
                nodeIndex = 0,
                nodeList = (typeof nodeOrSelector === 'string') ? document.querySelectorAll(nodeOrSelector) : [nodeOrSelector];
    
    
            for (; nodeIndex < nodeList.length; nodeIndex += 1) {
                node = nodeList[nodeIndex];
    
                switch (operation) {
                    case 'add':
                        if (!classUtil('has', node, arg1)) {
                            node.className = node.className + ' ' + arg1;
                        }
                        break;
                    case 'has':
                        return indexOf(node.className.split(' '), arg1) >= 0;
                    case 'remove':
                        classes = node.className.split(' ');
                        index = indexOf(classes, arg1);
                        if (index !== -1) {
                            classes.splice(index, 1);
                        }
                        node.className = classes.join(' ');
                        break;
                    case 'replace':
                        classUtil('remove', node, arg1);
                        classUtil('add', node, arg2);
                        break;
                    case 'swap':
                        if (classUtil('has', node, arg1)) {
                            classUtil('remove', node, arg1);
                            classUtil('add', node, arg2);
                        } else {
                            classUtil('remove', node, arg2);
                            classUtil('add', node, arg1);
                        }
                        break;
                    case 'toggle':
                        arg1.split(' ').map(function (className) {
                            if (classUtil('has', node, className)) {
                                classUtil('remove', node, className);
                            } else {
                                classUtil('add', node, className);
                            }
                        });
                        break;
                }
            }
    
            return false;
        }   /* eslint-enable array-callback-return, complexity, default-case, no-loop-func */
    
        function closeOverflow(kind) {
            if (overflowOpen[kind]) {
                classUtil('add', '.nw-c-nav__' + kind + '-overflow', 'gs-u-display-none');
                classUtil('remove', '.nw-c-nav__' + kind + '-morebutton', 'nw-c-nav__' + kind + '-morebutton__open');
                classUtil('add', '.nw-c-nav__' + kind + '-morebutton', 'nw-c-nav__' + kind + '-morebutton__closed');
                setAriaExpanded('.nw-c-nav__' + kind + '-morebutton', false);
                overflowOpen[kind] = false;
            }
        }
    
        function closeBottomNarrowNav() {
            classUtil('remove', '.nw-c-nav__narrow-footerbutton', 'nw-c-nav__item-open');
            classUtil('add', '.nw-c-nav__narrow-footerbutton', 'nw-c-nav__item-closed');
            classUtil('remove', '.nw-c-nav__narrow-bottom', 'gs-u-display-block');
            classUtil('remove', '.nw-c-nav__narrow-bottom', 'gs-u-display-none@m');
            setAriaExpanded('.nw-c-nav__narrow-footerbutton', false);
        }
    
        function closeSecondaryNarrowNav() {
            classUtil('remove', '.nw-c-nav__narrow-secondary__panel', 'gs-u-display-none');
            classUtil('replace', '.nw-c-nav__narrow-secondary__panel', 'nw-c-nav__narrow-secondary__panel-open', 'nw-c-nav__narrow-secondary__panel-closed');
            classUtil('replace', '.nw-c-nav__narrow-secondary__button', 'nw-c-nav__item-open', 'nw-c-nav__item-closed');
            setAriaExpanded('.nw-c-nav__narrow-secondary__button', false);
        }
    
        function closeTopNarrowNav() {
            classUtil('remove', '.nw-c-nav__narrow-top', 'gs-u-display-block');
            classUtil('add', '.nw-c-nav__narrow-top', 'gs-u-display-none@m');
            classUtil('remove', '.nw-c-nav__narrow-headerbutton', 'nw-c-nav__narrow-headerbutton--open');
            classUtil('add', '.nw-c-nav__narrow-headerbutton', 'nw-c-nav__narrow-headerbutton--closed');
            setAriaExpanded('.nw-c-nav__narrow-headerbutton', false);
            classUtil('remove', '#site-container', 'gs-u-display-none');
            classUtil('remove', '#nw-c-nav__narrow-section__heading', 'gs-u-display-none');
            classUtil('remove', '.nw-c-nav__narrow-secondary__panel', 'gs-u-display-none');
        }
    
        // Returns a function, that, as long as it continues to be invoked, will not
        // be triggered. The function will be called after it stops being called for
        // N milliseconds. If `immediate` is passed, trigger the function on the
        // leading edge, instead of the trailing.
        //
        /* eslint-disable */
        function debounce(func, n, immediate) {
            var timeout;
    
            return function() {
                var context = this, args = arguments;
                var later = function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                };
                var callNow = immediate && !timeout;
                clearTimeout(timeout);
                timeout = setTimeout(later, n);
                if (callNow) func.apply(context, args);
            };
        } /* eslint-enable */
    
        function findParentAccordionButton(event, accordionButtons) {
            var accordionButtonNodes = document.querySelectorAll(accordionButtons),
                buttonIndex = 0,
                childIndex = 0,
                childNodes = null;
    
            for (; buttonIndex < accordionButtonNodes.length; buttonIndex += 1) {
                childNodes = accordionButtonNodes[buttonIndex].childNodes;
    
                for (childIndex = 0; childIndex < childNodes.length; childIndex += 1) {
                    if (childNodes[childIndex] === event.target) {
                        return accordionButtonNodes[buttonIndex];
                    }
                }
            }
    
            return null;
        }
    
        function handled(event) {
            event.preventDefault();
            event.stopPropagation();
    
            return false;
        }
    
    
        //  close an overflow area if the focus is no longer in the navigation or the overflow
        //
        function handleOverflow() {
            addListener(document, 'focus', function () {
                var nav = null,
                    overflow = null;
    
                ['wide', 'secondary'].forEach(function(kind) {
                    if (overflowOpen[kind]) {
                        nav = document.querySelectorAll('.nw-c-nav__' + kind + '-sections')[0];
                        overflow = document.querySelectorAll('.nw-c-nav__' + kind + '-overflow-list')[0];
    
                        if (!inChildNodes(nav, document.activeElement) && !inChildNodes(overflow, document.activeElement)) {
                            closeOverflow(kind);
                        }
                    }
                });
            }, true);
        }
    
        //  Resize handler
        //  Handles a window resize, including going from narrow to wide, and the floating 'More' button on the end of wide navigations
        //
        function handleResize() {
            if (window.innerWidth < 600) {
                closeOverflow('wide');
                closeOverflow('secondary');
    
                return;
            }
    
            if (classUtil('has', '.nw-c-nav__narrow-headerbutton', 'nw-c-nav__narrow-headerbutton--open')) {
                closeTopNarrowNav();
            }
    
            if (classUtil('has', '#local-search-region', 'gs-u-display-none') && classUtil('has', '#site-container', 'gs-u-display-none')) {
                closeTopNarrowNav();
            }
    
            if (classUtil('has', '.nw-c-nav__narrow-footerbutton', 'nw-c-nav__item-open')) {
                closeBottomNarrowNav();
            }
    
            if (classUtil('has', '.nw-c-nav__narrow-footerbutton', 'nw-c-nav__item-open')) {
                closeBottomNarrowNav();
            }
    
            if (classUtil('has', '.nw-c-nav__narrow-secondary__panel', 'nw-c-nav__narrow-secondary__panel-open')) {
                closeSecondaryNarrowNav();
            }
    
            handleMoreButton('wide');
            handleMoreButton('secondary');
        }
    
        function inChildNodes(node, targetNode) {
            var index = 0;
    
            if ('childNodes' in node) {
                for (; index < node.childNodes.length; index += 1) {
                    if (targetNode === node.childNodes[index] || inChildNodes(node.childNodes[index], targetNode)) {
                        return true;
                    }
                }
            }
    
            return false;
        }
    
        // IE8
        function indexOf(haystack, needle) {
            var bale = 0;
    
            for (; bale < haystack.length; bale += 1) {
                if (haystack[bale] === needle) {
                    return bale;
                }
            }
    
            return -1;
        }
    
        function initNavigation() {
            var actuator = 0,
                actuators = [],
                eventHandler = null,
                key = null;
    
            accessabilitySwapouts();
            setupStats();
    
            for (key in eventHandlers) { // eslint-disable-line guard-for-in
                eventHandler = eventHandlers[key];
    
                actuators = (typeof eventHandler.actuator === 'string') ? document.querySelectorAll(eventHandler.actuator) : [eventHandler.actuator];
                for (actuator = 0; actuator < actuators.length; actuator += 1) {
                    addListener(actuators[actuator], eventHandler.event ? eventHandler.event : 'click', eventHandler.handler);
                }
            }
    
            handleOverflow();
            handleMoreButton('wide');
            handleMoreButton('secondary');
    
            addListener(window, 'resize', debounce(handleResize, 300));
        }
    
        function setAriaExpanded(selector, value) {
            var elements = window.document.querySelectorAll(selector),
                index = 0;
    
            for (; index < elements.length; index += 1) {
                if (typeof value === 'string') {
                    elements[index].querySelectorAll('[aria-expanded]')[0].setAttribute('aria-expanded', classUtil('has', elements[index], value));
                } else {
                    elements[index].setAttribute('aria-expanded', value);
                }
            }
        }
    
        function toggleAriaExpanded(selector) {
            var elements = window.document.querySelectorAll(selector),
                index = 0;
    
            for (; index < elements.length; index += 1) {
                elements[index].setAttribute('aria-expanded', elements[index].getAttribute('aria-expanded') === 'true' ? 'false' : 'true');
            }
        }
    
        function restoreNormality() {
            closeOverflow('wide');
            closeOverflow('secondary');
            closeTopNarrowNav();
            closeBottomNarrowNav();
            closeSecondaryNarrowNav();
        }
    
        /*  Stats Stuff starts here */
    
        function trackDataEntityIds(element) {
            var namespace = element || document,
                allDataEntityLinks = namespace.querySelectorAll('[data-entityid]'),
                entityId = '',
                entityLink = 0,
                story = 0,
                storyLink = '',
                storyLinks = [];
    
            for (; entityLink < allDataEntityLinks.length; entityLink += 1) {
                entityId = allDataEntityLinks[entityLink].getAttribute('data-entityid');
    
                storyLinks = allDataEntityLinks[entityLink].querySelectorAll('a,button');
                for (story = 0; story < storyLinks.length; story += 1) {
                    storyLink = storyLinks[story];
    
                    if (typeof storyLink.linktrack === 'undefined') {
                        storyLink.linktrack = '';
                    } else {
                        storyLink.linktrack += '&';
                    }
                    storyLink.linktrack += 'story_slot=%d'.replace('%d', story + 1);
                }
    
                trackEvent({ region: allDataEntityLinks[entityLink], linkLocation: entityId });
            }
        }
    
        function setupStats() {
            var link = 0,
                links = [],
                navItem = 0,
                navItems = [],
                subNavItems = [],
                bottomNavItems = [];
    
            function navItemClickHandler(clickEvent) {
                var parentUL = parentNode(clickEvent.target, 'UL');
    
                var wide = classUtil('has', parentUL, 'nw-c-nav__wide-sections') || classUtil('has', parentUL, 'nw-c-nav__wide-overflow-list-column');
                var overflow = classUtil('has', parentUL, 'nw-c-nav__wide-overflow-list-column') || classUtil('has', parentUL, 'nw-c-nav__secondary-overflow-list-column');
                var section = getNameFromContentOfFirstChild(clickEvent.target);
    
                var navigation = wide ? 'wide' : 'wide-secondary';
                var inOrOut = overflow ? 'in' : 'out';
                var kind = wide ? 'primary' : 'secondary';
                var suffix = overflow ? '-overflow' : '';
                var linkLocation = 'wide-navigation-' + kind + suffix;
    
                logEvent(
                    {
                        action_type: 'click',
                        action_name: 'nav-' + navigation + '-' + inOrOut + 'sidePanel-click'
                    },
                    {
                        link: section,
                        linkLocation: linkLocation
                    }
                );
    
                trackEvent({ linkLocation: linkLocation });
            }
    
            function subNavItemClickHandler(type, clickEvent) {
                var link = getNameFromContentOfFirstChild(clickEvent.target);
                var linkLocation = 'narrow-navigation-' + type;
    
                logEvent(
                    {
                        action_type: 'click',
                        action_name: 'nav-narrow-insidePanel-click' },
                    {
                        link: link
                    }
                );
    
                trackEvent({ linkLocation: linkLocation });
            }
    
            trackDataEntityIds();
    
            navItems = document.querySelectorAll('.nw-c-nav__wide-menuitem-container,.nw-c-nav__secondary-menuitem-container');
            for (; navItem < navItems.length; navItem += 1) {
                links = navItems[navItem].querySelectorAll('a');
                for (link = 0; link < links.length; link += 1) {
                    addListener(links[link], 'click', navItemClickHandler);
                }
            }
    
            subNavItems = document.querySelectorAll('nav.nw-c-nav__narrow-top .nw-c-nav__item');
            for (navItem = 0; navItem < subNavItems.length; navItem += 1) {
                links = subNavItems[navItem].querySelectorAll('a');
                for (link = 0; link < links.length; link += 1) {
                    addListener(links[link], 'click', subNavItemClickHandler.bind(null, 'primary'));
                }
            }
    
            bottomNavItems = document.querySelectorAll('nav.nw-c-nav__narrow-bottom .nw-c-nav__item');
            for (navItem = 0; navItem < bottomNavItems.length; navItem += 1) {
                links = bottomNavItems[navItem].querySelectorAll('a');
                for (link = 0; link < links.length; link += 1) {
                    addListener(links[link], 'click', subNavItemClickHandler.bind(null, 'footer'));
                }
            }
        }
    
        function fireAtiEvent(el, PAR, CHD) {
            const slug = el.getAttribute('href');
            const container = window.NewsPage.container || null;
            const enhancedNavScriptTag = document.getElementById('nw-c-navigation-enhanced-javascript');
            var edition = window.NewsPage.edition || enhancedNavScriptTag.getAttribute('data-nav-edition') || 'domestic';
    
            if (container) {
                return window.bbcpage.getContentId()
                    .then((contentId) => document.dispatchEvent(
                        new CustomEvent('bbc-user-event', {
                            detail: {
                                container,
                                result: slug,
                                source: contentId,
                                label: 'click~story',
                                metadata: {
                                    EDN: edition,
                                    PAR,
                                    CHD
                                }
                            }
                        })
                    ));
            }
    
            return null;
        }
    
    /* eslint-disable */
        function trackEvent(event) {
            const el = event.region.querySelectorAll('a')[0];
            const parts = event.linkLocation.split('#');
            let parent = null;
            let child = null;
    
            if (parts.length > 1) {
                parent = `${parts[0]}::1`;
                child = `${parts[0]}::${parts[1]}`;
            }
    
            addListener(event.region, 'click', (() => fireAtiEvent(el, parent, child)));
        }
    /* eslint-disable */
    
    /* eslint-disable */
        function logEvent(hiddenEvent, labels) {
            var actionType = hiddenEvent.action_type || 'event';
            var actionName = hiddenEvent.action_name;
            var index = 0;
            var selector = hiddenEvent.selector;
            var objects = selector ? document.querySelectorAll(selector) : [];
    
            if (selector) {
                for (; index < objects.length; index += 1) {
                    labels.link = getNameFromContentOfFirstChild(objects[index]);
                    // istats.log(actionType, actionName, labels);
                }
            } else {
                // istats.log(actionType, actionName, labels);
            }
        }
    /* eslint-enable */
    
        function parentNode(element, type) {
            while (element) {
                if (element.nodeName === type) {
                    break;
                }
                element = element.parentNode;   // eslint-disable-line no-param-reassign
            }
    
            return element;
        }
    
        function getNameFromContentOfFirstChild(element) {
            var index = 0,
                spans = null;
    
            if (element.nodeName === 'SPAN') {
                return element.innerHTML.trim();
            }
    
            spans = element.querySelectorAll('span');
            for (; index < spans.length; index += 1) {
                if (spans[index].innerHTML !== '') {
                    return spans[index].innerHTML.trim();
                }
            }
    
            return '';
        }
    
        function getVisibilityStringFromAriaExpanded(element) {
            return element.getAttribute('aria-expanded') === 'true' ? 'visible' : 'hidden';
        }
    
        /*  Stats Stuff ends here */
    
        /*  main
         */
        initNavigation();
        window.trackDataEntityIds = trackDataEntityIds;
    
    })();
    